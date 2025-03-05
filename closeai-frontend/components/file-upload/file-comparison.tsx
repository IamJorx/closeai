'use client';

import React, { useState } from 'react';
import { FileUploadCard } from './file-upload-card';
import { Button } from '@/components/ui/button';
import { fileService } from '@/lib/api';
import { PlusIcon, GitCompareIcon, DownloadIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Spinner } from '@/components/ui/spinner';

export function FileComparison() {
  const { toast } = useToast();
  const [file1Id, setFile1Id] = useState<number | null>(null);
  const [file2Id, setFile2Id] = useState<number | null>(null);
  
  const [isUploading1, setIsUploading1] = useState(false);
  const [isUploading2, setIsUploading2] = useState(false);
  
  const [isSuccess1, setIsSuccess1] = useState(false);
  const [isSuccess2, setIsSuccess2] = useState(false);
  
  const [isError1, setIsError1] = useState(false);
  const [isError2, setIsError2] = useState(false);
  
  const [errorMessage1, setErrorMessage1] = useState('');
  const [errorMessage2, setErrorMessage2] = useState('');
  
  const [isComparing, setIsComparing] = useState(false);
  const [comparisonError, setComparisonError] = useState('');
  const [comparisonBlob, setComparisonBlob] = useState<Blob | null>(null);

  const handleFileSelected = async (file: File, fileNumber: 1 | 2) => {
    if (fileNumber === 1) {
      setIsUploading1(true);
      setIsSuccess1(false);
      setIsError1(false);
    } else {
      setIsUploading2(true);
      setIsSuccess2(false);
      setIsError2(false);
    }
    
    try {
      const response = await fileService.uploadFile(file);
      console.log('Respuesta del servidor:', response);
      
      const fileId = response.archivo_id?.id;
      
      if (!fileId) {
        throw new Error('No se pudo obtener el ID del archivo');
      }
      
      if (fileNumber === 1) {
        setFile1Id(fileId);
        setIsUploading1(false);
        setIsSuccess1(true);
        toast({
          title: "Archivo cargado correctamente",
          description: `El archivo ${file.name} ha sido cargado con éxito.`,
          variant: "success",
        });
      } else {
        setFile2Id(fileId);
        setIsUploading2(false);
        setIsSuccess2(true);
        toast({
          title: "Archivo cargado correctamente",
          description: `El archivo ${file.name} ha sido cargado con éxito.`,
          variant: "success",
        });
      }
    } catch (error) {
      console.error(`Error al cargar el archivo ${fileNumber}:`, error);
      
      const errorMsg = error instanceof Error 
        ? error.message 
        : 'Error al cargar el archivo';
      
      if (fileNumber === 1) {
        setIsUploading1(false);
        setIsError1(true);
        setErrorMessage1(errorMsg);
      } else {
        setIsUploading2(false);
        setIsError2(true);
        setErrorMessage2(errorMsg);
      }
      
      toast({
        title: "Error al cargar el archivo",
        description: errorMsg,
        variant: "destructive",
      });
    }
  };

  const handleCompare = async () => {
    if (!file1Id || !file2Id) return;
    
    setIsComparing(true);
    setComparisonError('');
    setComparisonBlob(null);
    
    try {
      const blob = await fileService.compareFiles(file1Id, file2Id);
      setComparisonBlob(blob);
      setIsComparing(false);
      
      toast({
        title: "Comparación completada",
        description: "Los archivos han sido comparados correctamente. Puedes descargar el resultado.",
        variant: "success",
      });
    } catch (error) {
      console.error('Error al comparar archivos:', error);
      const errorMsg = error instanceof Error ? error.message : 'Error al comparar archivos';
      setIsComparing(false);
      setComparisonError(errorMsg);
      
      toast({
        title: "Error al comparar archivos",
        description: errorMsg,
        variant: "destructive",
      });
    }
  };

  const handleDownload = () => {
    if (!comparisonBlob) return;
    
    const url = URL.createObjectURL(comparisonBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'comparacion.xlsx';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Descarga iniciada",
      description: "El archivo de comparación se está descargando.",
      variant: "default",
    });
  };

  const canCompare = file1Id !== null && file2Id !== null && !isUploading1 && !isUploading2;

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="text-2xl font-bold mb-8 text-white">Comparación de Transacciones</h1>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
        <FileUploadCard
          id="file-upload-1"
          onFileSelected={(file) => handleFileSelected(file, 1)}
          isUploading={isUploading1}
          isSuccess={isSuccess1}
          isError={isError1}
          errorMessage={errorMessage1}
        />
        
        <div className="neumorph p-4 rounded-full">
          <PlusIcon size={24} className="text-white" />
        </div>
        
        <FileUploadCard
          id="file-upload-2"
          onFileSelected={(file) => handleFileSelected(file, 2)}
          isUploading={isUploading2}
          isSuccess={isSuccess2}
          isError={isError2}
          errorMessage={errorMessage2}
        />
      </div>
      
      {!file1Id && !file2Id && (
        <Alert variant="info" className="mb-6 max-w-md">
          <AlertTitle>Instrucciones</AlertTitle>
          <AlertDescription>
            Selecciona dos archivos Excel para comparar sus transacciones. Una vez cargados, podrás iniciar la comparación.
          </AlertDescription>
        </Alert>
      )}
      
      {(file1Id || file2Id) && !(file1Id && file2Id) && (
        <Alert variant="info" className="mb-6 max-w-md">
          <AlertTitle>Casi listo</AlertTitle>
          <AlertDescription>
            Selecciona el {file1Id ? "segundo" : "primer"} archivo para poder realizar la comparación.
          </AlertDescription>
        </Alert>
      )}
      
      <div className="flex flex-col items-center gap-4">
        {isComparing ? (
          <div className="flex flex-col items-center p-6">
            <Spinner size="lg" label="Comparando archivos..." />
          </div>
        ) : (
          <Button
            onClick={handleCompare}
            disabled={!canCompare || isComparing}
            variant="neumorph"
            className="flex items-center gap-2 px-6 py-3 h-auto text-white"
          >
            <GitCompareIcon size={16} />
            Comparar Archivos
          </Button>
        )}
        
        {comparisonError && (
          <Alert variant="destructive" className="mt-4 max-w-md">
            <AlertTitle>Error al comparar</AlertTitle>
            <AlertDescription>{comparisonError}</AlertDescription>
          </Alert>
        )}
        
        {comparisonBlob && (
          <Button
            onClick={handleDownload}
            variant="neumorph"
            className="flex items-center gap-2 mt-4 text-white"
          >
            <DownloadIcon size={16} />
            Descargar Comparación
          </Button>
        )}
      </div>
    </div>
  );
} 
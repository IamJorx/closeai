'use client';

import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { FileIcon, UploadIcon, CheckIcon } from 'lucide-react';
import { Spinner } from '@/components/ui/spinner';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface FileUploadCardProps {
  id: string;
  onFileSelected: (file: File) => void;
  isUploading?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
  errorMessage?: string;
}

export function FileUploadCard({
  id,
  onFileSelected,
  isUploading = false,
  isSuccess = false,
  isError = false,
  errorMessage = 'Error al cargar el archivo'
}: FileUploadCardProps) {
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      onFileSelected(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="neumorph p-6 w-64 h-64 flex flex-col items-center justify-center gap-4 relative">
      <input
        type="file"
        id={id}
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".xlsx"
        className="hidden"
        disabled={isUploading}
      />
      
      <div className="text-4xl mb-2">
        <FileIcon size={48} className="text-white" />
      </div>
      
      {!fileName && !isUploading && !isSuccess && !isError && (
        <>
          <p className="text-center text-sm mb-4 text-white">Selecciona un archivo Excel</p>
          <Button 
            onClick={handleButtonClick} 
            variant="neumorph"
            className="flex items-center gap-2 text-white"
          >
            <UploadIcon size={16} />
            Seleccionar
          </Button>
        </>
      )}
      
      {fileName && !isUploading && !isSuccess && !isError && (
        <>
          <p className="text-center text-sm font-medium truncate max-w-full px-4 text-white">{fileName}</p>
          <Button 
            onClick={handleButtonClick} 
            variant="neumorph"
            className="flex items-center gap-2 text-white"
          >
            <UploadIcon size={16} />
            Cambiar
          </Button>
        </>
      )}
      
      {isUploading && (
        <div className="flex flex-col items-center">
          <Spinner size="default" label="Cargando..." />
        </div>
      )}
      
      {isSuccess && (
        <div className="flex flex-col items-center">
          <div className="rounded-full bg-green-500/20 p-2 mb-2">
            <CheckIcon size={24} className="text-green-400" />
          </div>
          <p className="text-center text-sm text-white">Archivo cargado</p>
          <p className="text-center text-xs text-gray-300 truncate max-w-full px-4">{fileName}</p>
        </div>
      )}
      
      {isError && (
        <div className="flex flex-col items-center">
          <Alert variant="destructive" className="mb-2 p-2">
            <AlertDescription className="text-center text-xs">
              {errorMessage}
            </AlertDescription>
          </Alert>
          <Button 
            onClick={handleButtonClick} 
            variant="neumorph"
            className="flex items-center gap-2 mt-2 text-white"
          >
            <UploadIcon size={16} />
            Reintentar
          </Button>
        </div>
      )}
    </div>
  );
} 
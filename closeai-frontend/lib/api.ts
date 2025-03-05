import axios from 'axios';

// Configuración base de axios
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interfaz para la respuesta de archivo
export interface ArchivoData {
  id: number;
  nombre_archivo: string;
  fecha_carga: string;
}

// Interfaz para la respuesta de carga de archivo
export interface ArchivoResponse {
  archivo_id: ArchivoData;
}

// Interfaz para la respuesta de transacción
export interface TransaccionResponse {
  id: number;
  archivo_id: number;
  id_transaccion: string;
  fecha: string;
  cuenta_origen: string;
  cuenta_destino: string;
  monto: number;
  estado: string;
  extra_data?: Record<string, unknown>;
}

// Interfaz para la respuesta de archivo con transacciones
export interface ArchivoWithTransaccionesResponse extends ArchivoData {
  transacciones: TransaccionResponse[];
}

// Servicio para la carga de archivos
export const fileService = {
  // Cargar un archivo Excel
  async uploadFile(file: File): Promise<ArchivoResponse> {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await api.post<ArchivoResponse>('/archivos/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    return response.data;
  },
  
  // Obtener un archivo por su ID
  async getFile(id: number): Promise<ArchivoWithTransaccionesResponse> {
    const response = await api.get<ArchivoWithTransaccionesResponse>(`/archivos/${id}`);
    return response.data;
  },
  
  // Comparar dos archivos
  async compareFiles(archivoId1: number, archivoId2: number): Promise<Blob> {
    const response = await api.get(`/archivos/comparar-excel/`, {
      params: {
        archivo_id_1: archivoId1,
        archivo_id_2: archivoId2,
      },
      responseType: 'blob',
    });
    
    return response.data;
  },
};

// Servicio para las transacciones
export const transactionService = {
  // Obtener todas las transacciones
  async getTransactions(skip = 0, limit = 100): Promise<TransaccionResponse[]> {
    const response = await api.get<TransaccionResponse[]>('/transacciones/', {
      params: { skip, limit },
    });
    
    return response.data;
  },
  
  // Obtener una transacción por su ID
  async getTransaction(id: number): Promise<TransaccionResponse> {
    const response = await api.get<TransaccionResponse>(`/transacciones/${id}`);
    return response.data;
  },
}; 
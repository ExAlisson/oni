export interface AuthResponseData {
  token: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  errors?: Record<string, string[]>; // For validation errors
}

export interface TipoAtendimento {
  id: string;
  descricao: string;
}

export interface Operadora {
  conv_ans: string;
  conv_sigla: string;
}

export interface Servico {
  id: string;
  descricao: string;
}

export interface Especialidade {
  id: string;
  descricao: string;
  procedimento_id: string;
}

export interface Procedimento {
  especialidade_id: string;
  especialidade_descricao: string;
  procedimento_id: string;
  procedimento_descricao: string;
}

export interface Profissional {
  id: string;
  descricao: string;
}

export interface CalendarioData {
  grda_data: string; // YYYY-MM-DD
}

export interface CalendarioHorario {
  horario_id: string;
  grda_hora: string; // HH:MM
}

export interface PacienteValidationData {
  benef_id: string;
  benef_nome: string;
  benef_celular: string;
}

export interface ExtendedPatientData {
  address?: string;
  insuranceCardNumber?: string;
  dateOfBirth?: string;
  rg?: string;
  sex?: 'masculino' | 'feminino' | 'outro' | '';
}

export interface FullPatientData extends PacienteValidationData, ExtendedPatientData {
  cpf: string; // Added CPF here
}


export interface PacienteCreationData {
  benef_id: number;
}

export interface AgendaCreationData {
  ag_id: number;
}

export interface ClienteData {
  id: string;
  cnpj: string;
  razao_social: string;
  nome_fantasia: string;
  logomarca?: string; // base64 image string
}

export enum ServiceType {
  CONSULTA = "1",
  TELECONSULTA = "5",
  EXAMES = "2",
}

// Admin Configuration Types
export interface OrthopedicSubSpecialty {
  id: string;
  name: string;
}

export interface InsurancePlanDetail {
  operatorId: string; // Corresponds to Operadora.conv_ans
  plans: string[];
  notice: string;
}

export interface ProfessionalMapping {
  subSpecialtyId: string; // Corresponds to OrthopedicSubSpecialty.id
  professionalIds: string[]; // Array of Profissional.id
}

export interface ProfessionalOperatorMapping {
  operatorId: string; // Corresponds to Operadora.conv_ans
  allowedProfessionalIds: string[]; // Array of Profissional.id
}

export interface AdminConfig {
  orthopedicSubSpecialties: OrthopedicSubSpecialty[];
  insurancePlanDetails: InsurancePlanDetail[];
  professionalMappings: ProfessionalMapping[];
  professionalOperatorMappings: ProfessionalOperatorMapping[]; // New mapping
  extendedPatientFieldsEnabled: boolean;
  defaultSpecialtyDesc: string; // e.g., "ORTOPEDIA E TRAUMATOLOGIA"
  defaultServiceId: string; // e.g., ServiceType.CONSULTA
  defaultServiceName: string; // e.g., "Consulta Médica"
}
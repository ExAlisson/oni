import { AdminConfig, ServiceType } from './types';

// IMPORTANT: Replace placeholder IDs (like 'ID_DR_MARCO_TULIO', 'ID_ORTOPEDIA_TRAUMATOLOGIA')
// with actual IDs from your API for these configurations to work correctly.
// You might need to fetch these IDs from the API once to set them up here.

export const adminConfiguration: AdminConfig = {
  orthopedicSubSpecialties: [
    { id: 'geral', name: 'Ortopedia Geral' },
    { id: 'mao', name: 'Mão' },
    { id: 'ombro', name: 'Ombro' },
    { id: 'joelho', name: 'Joelho' },
    { id: 'pediatrica', name: 'Ortopedia Pediátrica' },
    { id: 'coluna', name: 'Coluna' },
    { id: 'quadril', name: 'Quadril' },
    { id: 'pe', name: 'Pé e Tornozelo' },
    { id: 'anestesia', name: 'Anestesiologista' },
  ],
  insurancePlanDetails: [
    {
      operatorId: '343889', // Example: ANS ID for Unimed BH. Replace with actual ID.
      plans: ['Unipart Flex', 'Unimax'],
      notice: 'Atenção: Não atendemos o plano Unifácil para esta operadora.',
    },
    // Add more operator-specific details here
  ],
  professionalMappings: [
    {
      subSpecialtyId: 'joelho',
      professionalIds: ['1262'], // Dr. Marco Tulio's API ID
    },
      {
      subSpecialtyId: 'anestesia',
      professionalIds: ['11935103'], 
    },
    {
      subSpecialtyId: 'mao',
      professionalIds: ['11935067'], 
    }
    // Add more mappings
  ],
  professionalOperatorMappings: [
    {
      operatorId: '343889', // Example: ANS ID for Unimed BH (ensure this matches Operadora.conv_ans)
      allowedProfessionalIds: ['11935103'], // Dr. Marco Tulio's API ID
    },
    // Add more operator-professional mappings here
    // e.g., { operatorId: 'SOME_OTHER_OPERATOR_ANS_ID', allowedProfessionalIds: ['PROF_ID_1', 'PROF_ID_2'] }
  ],
  extendedPatientFieldsEnabled: true,
  defaultSpecialtyDesc: 'ORTOPEDIA E TRAUMATOLOGIA', // This description must exactly match API's description for the specialty
  defaultServiceId: ServiceType.CONSULTA,
  defaultServiceName: 'Consulta Médica', // Or fetch dynamically if needed
};

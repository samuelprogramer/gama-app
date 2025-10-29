/**
 * Aqui se encontra dos dados para as paginas
 * ./screens/escolas/servicos/*
 * 
 * Para uma tela de exibição
 * cada tela ira chamar suas infomações daqui
 * 
 */

// [0] TITULO [1] TEXTO



export class DadosServicos{


    primeira_habilitacao = ['Primeira Habilitação A/B','O Processo de 1 Habilitação consiste nos seguintes passos:\n\n'+
    '- Inscrição na Auto Escola\n'+
    '- Pré-cadastro no DETRAN\n'+
    '- Exame Médico e Psicotécnico\n'+
    '- Curso teórico (CFC - A)\n'+
    '- Curso de 45 horas\n'+
    '- Exame Teórico no DETRAN\n'+
    '- Curso Prático na Auto Escola\n'+
    '- Exame Prático no DETRAN\n'];
    getPrimeiraHabilitacao(){
        return this.primeira_habilitacao;
    }

    reabilitacao = ['Reabilitação','Voce que teve sua CNH/PPD cassada, entre em contato conosco.\n'];

    getReabilitacao(){
        return this.reabilitacao;
    }



    adicao_categoria = ['Adição de Categoria','O Processo de adição de Categoria seja A ou B, consiste nos seguintes passos:\n\n'+
    '- Inscrição na Auto Escola\n'+
    '- Pré-cadastro no DETRAN - Exame Médico e Psicotécnico\n'+
    '- Curso Prático 15 AULAS - Exame Prático no DETRAN\n'+
    '- Categoria A,B 15 AULAS'+
    '- Categoria C,D,E 20 AULAS'];

    getAdicaoCategoria(){
        return this.adicao_categoria;
    }

    pdc = ['PcD - PESSOAS COM NECESSIDADES ESPECIAIS','Você que é portador de necessidade especial ou já teve algum tipo de doença, que lhe dá o direito do benefício cedido pelo Governo com as seguintes isenções:\n\n'+
    'IPI ICMS-IPVA e Rodízio\n'+
    'Algumas doenças que poderão se enquadrar nestes BENEFÍCIOS:\n'+
    'Alguns Tipos de Câncer\n'+
    'Amputação\n'+
    'Artrite Reumatóide Artrodese\n'+
    'Artrogripose Artrose\n'+
    'Ausência de Membros\n'+
    'Autismo\n'+
    'AVC (Acidente Vascular Cerebral)\n'+
    'AVE (Acidente Vascular Encefálico)\n'+
    'Bursite\n'+
    'Cardiopatia\n'+
    'Deficiência Visual ou Cegueira (nos 2 olhos) Diabetes Hemiparesia Hemofilia HIV Positivo\n'+
    'Deficiência Mental\n'+
    'Derrame\n'+
    'Doenças Degenerativas\n'+
    'Doenças Neurológicas DORT (Distúrbio Osteomuscular Relacionado ao Trabalho)\n'+
    'Encurtamento de Membros e Más Formações\n'+
    'Esclerose Múltipla Escoliose Acentuada\n'+
    'Espondilite Anquilosante\n'+
    'Falta de Força\n'+
    'Falta de Sensibilidade\n'+
    'Formigamento\n'+
    'Hemiplegia\n'+
    'Hepatite C \n'+
    'Hérnia de Disco\n'+
    'HIV Positivo\n'+
    'LER (Lesão Por Esforço Repetitivo) Lesões com Sequelas Físicas\n'+
    'Linfomas\n'+
    'Lupus\n'+
    'Manguito Rotator\n'+
    'Mastectomia (Retirada da Mama)\n'+
    'Membros com Deformidades Congênitas ou Adquiridas\n'+
    'Monoparesia\n'+
    'Monoplegia\n'+
    'Má Formação\n'+
    'Nanismo (Baixa Estatura) Neuropatias Diabéticas\n'+
    'Ostomia\n'+
    'Paralisia\n'+
    'Paralisia Cerebral\n'+
    'Paraparesia\n'+
    'Paraplegia\n'+
    'Parkinson\n'+
    'Poliomielite\n'+
    'Problemas de Coluna\n'+
    'Prótese Internas ou Externas. Ex.: Joelho, Quadril, Coluna, etc. Quadrantectomia (Retirada de Parte da Mama)\n'+
    'Renal Crônico (Fistula)\n'+
    'Sequelas Físicas\n'+
    'Síndrome de Deficiência Imunológica (HIV) Síndrome do Túnel do Carpo\n'+
    'Talidomida\n'+
    'Tendinite Crônica\n'+
    'Tetraparesia\n'+
    'Tetraplegia\n'+
    'Triparesia Triplegia'];

    getpcd(){
        return this.pdc;
    }

    simulador = ['Simulador','Os simuladores foram elaborados para fazer o aluno se concentrar e estar atento à segurança no trânsito.\n'+
    'As aulas em um simulador permitem ao aluno ter a impressão de estar realmente em um carro.\n'+
    
    'O simulador não reprova, ele é um instrumento que oferece ao aluno uma real noção do que seja um veículo, a segurança ao dirigir e a sensação de fazer o movimento real de um veículo sem que aconteça nenhum acidente.\n'+
    
    'O Conselho Nacional de Trânsito (CONTRAN) determinou a obrigatoriedade do uso de simuladores de direção, durante o processo de formação do condutor.\n'+
    
    'Para a primeira habilitação o candidato deve fazer, no mínimo, 25 horas de aula prática, assim distribuídas:\n\n'+
    '20 horas em veículo de aprendizagem, sendo 4 horas no período noturno e 5 horas no simulador de direção, sendo 1 hora com conteúdo noturno.\n'+
    'Aos que já possuem a carteira de motorista, no entanto, querem adicionar a Categoria B, devem fazer 20 horas de aula, 5 horas no simulador.\n'];

    Reciclagem = ['Reciclagem','O motorista com portaria de suspensão do direito de dirigir que o processo já tenha encerrado a esfera administrativa de defesa/recurso ou que tenha renunciado para início de cumprimento da penalidade deve fazer o curso de reciclagem, oferecido pelo DetranPE e Centros de Formação de Condutores (CFCs/autoescolas).\n\n\n'+
    'Aviso importante!\n'+
    'O curso de reciclagem deve ser feito toda vez que o motorista for suspenso.\n\n'+
    'Curso teórico 30horas, e após a conclusão agendamento da Prova.\n'+
    'Matricule-se já na turma Presencial ou EAD.'];

    getSimulador(){
        return this.Reciclagem;
    }

}












export interface IPatientKeys {
    religiao?: string;
    profissao?: string;
    escolaridade?: string;
    'end-cidade'?: string;
    'tipo-sanquineo'?: string;
    genero?: 'M' | 'F';
    etnia?: string;
    'end-estado'?: string;
    'id-origin'?: string;
    'end-pais'?: string;
    'termo-privacidade'?: string;
    'doc-rg'?: string;
    'doc-cns'?: string;
    email?: string;
    'nome-mae'?: string;
    foto?: string;
    'nome-pai'?: string;
    'raca-cor'?: string;
    moradia?: string;
    'data-nascimento'?: string;
    nome?: string;
    'doc-cpf'?: string;
    'religiao-descricao'?: string;
    'raca-cor-descricao'?: string;
}

export interface IAuthToCollect {
    link: string;
    createdAt: Date;
}

export interface IPatientData {
    token: string;
    publicToken: string;
    tokenTtl: Date;
    keys?: IPatientKeys;
    authToCollect?: IAuthToCollect;
    detail: {
        code: number;
        status: string;
        message: string;
    };
}

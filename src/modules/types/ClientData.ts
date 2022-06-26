export type UpdateClientData = {

  id: string;
  name: string;
  adress: string;
  phone: string;

}

export type CreateClientData = Omit<UpdateClientData, 'id'>
export type DeleteClientData = {
  id: string;
}

  





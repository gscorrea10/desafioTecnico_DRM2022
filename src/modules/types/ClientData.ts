 type ClientData = {

  id: string;
  name: string;
  adress: string;
  phone: string;

}

export type CreateClientData = Omit<ClientData, 'id'>

export type UpdateClientData = ClientData

export type DeleteClientData = {
  id: string;
}

export type ClientOutput = {
	id: string,
	name: string,
	adress: string,
	phone: string,
	created_at: Date,
	updated_at: Date,
}

  





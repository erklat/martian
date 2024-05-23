type TGeo = {
  lat: string;
  lng: string;
};

type TAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: TGeo;
};

type TCompany = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type TUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: TAddress;
  phone: string;
  website: string;
  company: TCompany;
};

export default TUser;

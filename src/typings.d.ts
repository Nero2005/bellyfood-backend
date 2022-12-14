export interface AuthDto {
  phone: string;
  password: string;
  service: string;
  name?: string;
}

export interface User {
  _id: string;
  name: string;
  gender: string;
  phone: string;
  password: string;
  roles: string[];
  agentCode: number;
  location: string;
  approved: boolean;
  packageNames: PackageName[];
  createdAt: Date;
  updatedAt: Date;
}

export class Pagination {
  limit?: number = 10;
  page?: number = 0;
}

export class AdminFilter extends Pagination {
  name?: string;
}

export class UsersFilter extends Pagination {
  [key: string]: any;
  approved?: boolean;
  paid?: boolean;
  delivered?: boolean;
  agentCode?: string;
  name?: string;
  location?: string;
  inactive?: string;
  agentName?: string;
}

export class CustomersFilter extends UsersFilter {}

export class CreateAdmin {
  name: string;
  gender: string;
  phone: string;
  password: string;
  roles: string[] = ["ADMIN"];
}

export class CreateBellysaveCustomer {
  name: string;
  gender: string;
  agentCode: number;
  phone: string;
  password: string;
  location: string;
  approved: boolean;
  agentName: string;
  bankName: string;
  accountNumber: string;
}

export class CreateCustomer {
  agentName: string;
  name: string;
  gender: string;
  agentCode: number;
  phone: string;
  password: string;
  location: string;
  roles: string[] = ["CUSTOMER"];
  approved: boolean;
  packageNames: PackageName[];
  priceModifier: number;
}

export type PackageName = "NANO" | "MICRO" | "MEGA" | "GIGA" | "OGA NA BOSS";

export class AddPayment {
  phone: string;
  amount: number;
  agentCode: number;
}

export class AddAgent {
  name: string;
  password: string;
  phone: string;
}

export class AddReport {
  customerId: string;
  agentName: string;
  details: string;
}

declare module "otp-generator";

export default class Employee {
        id?: number;
        name!: string;
        email!: string;
        department!: 'HR' | 'FINANCE' | 'IT' | 'MARKETING' | 'SALES';
        createdAt?: Date;
        updatedAt?: Date;
        isActive?: boolean;
      
  }
  
export class ValidatePlateService {
  async execute(plate: string): Promise<boolean> {
    const oldPlateRegex = /^[A-Z]{3}\d{4}$/;
    const newPlateRegex = /^[A-Z]{3}\d[A-Z]\d{2}$/;

    if (!oldPlateRegex.test(plate) && !newPlateRegex.test(plate)) {
      return false;
    }

    return true;
  }
}

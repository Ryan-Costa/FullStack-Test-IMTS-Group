export class ValidatePhoneService {
  async execute(phone: string): Promise<boolean> {
    const phoneRegex = /^[0-9]{11}$/;
    return phoneRegex.test(phone);
  }
}

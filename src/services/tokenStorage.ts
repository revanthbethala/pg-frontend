import * as Keychain from 'react-native-keychain';

const SERVICE = 'pg-management-auth';

export type AuthTokens = {
  accessToken: string;
  refreshToken: string;
};

export const tokenStorage = {
  async save(tokens: AuthTokens): Promise<void> {
    await Keychain.setGenericPassword('auth', JSON.stringify(tokens), {
      service: SERVICE,
    });
  },

  async get(): Promise<AuthTokens | null> {
    const credentials = await Keychain.getGenericPassword({
      service: SERVICE,
    });

    if (!credentials) {
      return null;
    }

    return JSON.parse(credentials.password) as AuthTokens;
  },

  async getAccessToken(): Promise<string | null> {
    const tokens = await this.get();
    return tokens?.accessToken ?? null;
  },

  async getRefreshToken(): Promise<string | null> {
    const tokens = await this.get();
    return tokens?.refreshToken ?? null;
  },

  async updateAccessToken(accessToken: string): Promise<void> {
    const tokens = await this.get();

    if (!tokens) return;

    await this.save({
      ...tokens,
      accessToken,
    });
  },

  async updateTokens(tokens: AuthTokens): Promise<void> {
    await this.save(tokens);
  },

  async clear(): Promise<void> {
    await Keychain.resetGenericPassword({
      service: SERVICE,
    });
  },
};

// ❌ Over-mocking — tightly coupled code

// authService.js
export function authenticateUser(httpClient, tokenService) {
  const token = tokenService.getToken();
  return httpClient.post('/auth', { token });
}
// authService.test.js
test('authenticates using token and HTTP client', () => {
  const mockHttp = { post: jest.fn() };
  const mockTokenService = { getToken: jest.fn().mockReturnValue('abc') };

  authenticateUser(mockHttp, mockTokenService);

  expect(mockTokenService.getToken).toHaveBeenCalled();
  expect(mockHttp.post).toHaveBeenCalledWith('/auth', { token: 'abc' });
});

// ✅ Better approach — isolate logic, reduce mock needs

// tokenUtils.js
export function buildAuthPayload(token) {
  return { token };
}
// tokenUtils.test.js
import { buildAuthPayload } from './tokenUtils';

test('builds payload from token', () => {
  expect(buildAuthPayload('abc')).toEqual({ token: 'abc' });
});

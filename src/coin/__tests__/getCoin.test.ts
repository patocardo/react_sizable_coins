import { getCoins } from '../coin.service'

describe('getCoins', () => {
  test('getCoins with no parameters returns all coins', async () => {
    const { data } = await getCoins()

    expect(Array.isArray(data)).toBeTruthy()
    expect(data.every((item: any) => typeof item === 'object')).toBeTruthy()
    expect(data.every((item: any) => Object.keys(item).length > 0)).toBeTruthy()
    expect(data.every((item: any) => Object.prototype.hasOwnProperty.call(item, 'id'))).toBeTruthy()
    expect(data.every((item: any) => Object.prototype.hasOwnProperty.call(item, 'symbol'))).toBeTruthy()
    expect(data.every((item: any) => Object.prototype.hasOwnProperty.call(item, 'name'))).toBeTruthy()
  })

  test('getCoins with search string returns matching coins', async () => {
    const { data } = await getCoins('bitcoin')

    expect(Array.isArray(data)).toBeTruthy()
    expect(data.every((item: any) => typeof item === 'object')).toBeTruthy()
    expect(data.every((item: any) => Object.keys(item).length > 0)).toBeTruthy()
    expect(data.every((item: any) => Object.prototype.hasOwnProperty.call(item, 'id'))).toBeTruthy()
    expect(data.every((item: any) => Object.prototype.hasOwnProperty.call(item, 'symbol'))).toBeTruthy()
    expect(data.every((item: any) => (
      Object.prototype.hasOwnProperty.call(item, 'name') &&
      item.name.toLowerCase().includes('bitcoin'))
    )).toBeTruthy()
  })
})

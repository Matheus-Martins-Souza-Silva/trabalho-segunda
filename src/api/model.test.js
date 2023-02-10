import { HFit } from '.'

let hFit

beforeEach(async () => {
  hFit = await HFit.create({ cliente: 'test', employee: 'test', gym: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = hFit.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(hFit.id)
    expect(view.cliente).toBe(hFit.cliente)
    expect(view.employee).toBe(hFit.employee)
    expect(view.gym).toBe(hFit.gym)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = hFit.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(hFit.id)
    expect(view.cliente).toBe(hFit.cliente)
    expect(view.employee).toBe(hFit.employee)
    expect(view.gym).toBe(hFit.gym)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})

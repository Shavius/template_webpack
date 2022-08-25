import { hellowInConsole, plus } from "../modules/hellowInConsole"

it('hellow in console text hellow', function () {
    let text = hellowInConsole('hellow')

    expect(text).toBe('hellow')
})

it('hellow in console text No text', function () {
    let text = hellowInConsole()

    expect(text).toBe('No text')
})

it('function plus 150', function () {
    let result = plus(100, 50)

    expect(result).toBe(150)
})

it('function plus 0', function () {
    let result = plus()

    expect(result).toBe(0)
})

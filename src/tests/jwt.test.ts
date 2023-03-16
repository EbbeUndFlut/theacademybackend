import '../config/config'
import { createToken } from "../util/jwt"


describe('check for jwt', () => {
    test('generate valid jwt token', () => {
        const token = createToken({ id: '984jfhd8fdh', role: 'admin' })
        console.log(token);
        expect(token).not.toBeUndefined()
    })
})
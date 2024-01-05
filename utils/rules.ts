const emailPattern = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

export const rules = {
    name: [
        (val: string) => (val || '').length > 0 || 'This field is required',
        (val: string) => (val || '').length < 100 || 'This field cannot be longer than 100 characters.'
    ],
    text: [
        (val: string) => (val || '').length > 0 || 'This field is required',
    ],
    phone: [
        (val: string) => val == null || (val || '').length < 30 || 'This field cannot be longer than 30 characters.'
    ],
    email: [
        (val: string) => val == null || !!(val || '').match(emailPattern) || 'Please enter a valid email.'
    ],
    number: [
        (val: string) =>
            val == null
            || (!isNaN(Number(val.toString())) && Number(val.toString()) % 1 === 0)
            || 'Input value must be whole number'
    ],
    decimal: [
        (val: string) => val == null || (!isNaN(Number(val.toString()))) || 'Input value must be a number'
    ]
}

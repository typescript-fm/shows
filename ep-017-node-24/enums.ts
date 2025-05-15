// @ts-expect-error
enum DoesItWork {
    YES = 'YES',
    NO = 'NO',
}

console.log('Enums work?', DoesItWork.YES);
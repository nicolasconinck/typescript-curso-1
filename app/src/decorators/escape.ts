export function escape(target: any,
                       propertyKey: string,
                       descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]){
        let result = originalMethod.apply(this, args);

        if (typeof result === 'string'){
            result = result.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        
        return result;
    }
    return descriptor
}
export function logExecutionTime(inSecunds = false) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = 1;
            let unit = 'milesegundos';
            const t1 = performance.now();
            const result = originalMethod.apply(this, args);
            const t2 = performance.now();
            if (inSecunds) {
                divisor = 1000;
                unit = 'secundos';
            }
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1) / divisor} ${unit}`);
            result;
        };
        return descriptor;
    };
}

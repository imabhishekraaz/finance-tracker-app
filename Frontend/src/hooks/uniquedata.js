export function uniqueData(data){
    Object.values(
        data.reduce((acc, item) => {
            if (!acc[item.category]) {
                acc[item.category] = { ...item };
            } else {
                acc[item.category].amount += item.amount;
            }
            return acc;
        }, {})
    );
}
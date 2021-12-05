export const returnRemainingDuration = (data: any) => {
    if (data.RemainingDuration.includes(".")) {
        var d = new Date();
        let endDate = data.RemainingDuration.split(".");
        const currDate = d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();
        let endDateEdited = endDate[1] + '/' + endDate[0] + '/' + endDate[2]

        const dateOne = new Date(endDateEdited);
        const dateTwo = new Date(currDate);

        const dateOneUTC = Date.UTC(dateOne.getFullYear(), dateOne.getMonth(), dateOne.getDate())
        const dateTwoUTC = Date.UTC(dateTwo.getFullYear(), dateTwo.getMonth(), dateTwo.getDate())
        const difference = dateOneUTC - dateTwoUTC


        return `son ${difference / (1000 * 60 * 60 * 24)} gün`
    }
    else {
        return data.RemainingDuration
    }

}
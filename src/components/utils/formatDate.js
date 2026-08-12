function formatDate(dateInput) {
    const dateObj = new Date(dateInput + 'T00:00:00');

    const formattedDate = dateObj.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    })

    return formattedDate;
}

export default formatDate;
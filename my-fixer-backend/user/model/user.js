class User {

    _DEFAULT_COUNTRY = 1;
    _DEFAULT_CATEGORY = 1;

    constructor(data) {
        if (!data) {
            throw new Error('User data is empty');
        }

        this.fields = [
            'id',
            'fname',
            'lname',
            'username',
            'password',
            'email',
            'countryId',
            'categoryId'
        ];

        this.fields.forEach((key) => {
            this[key] = data[key];
        })

        this.countryId = data.countryId || this._DEFAULT_COUNTRY;
        this.categoryId = data.categoryId || this._DEFAULT_CATEGORY;
    }

    toResponse() {
        const response = {};
        this.fields.forEach((key) => {
            response[key] = this[key];
        })
        return response;
    }
}

module.exports = User
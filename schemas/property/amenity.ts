export default {
    name: 'amenity',
    title: 'Amenity',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'iconClass',
            title: 'Icon Class',
            type: 'string',
            description: 'Bootstrap icon class for the ' +
                'amenity (e.g., "fa-solid fa-wifi")'
        },
        {
            name: 'included',
            title: 'Included',
            type: 'boolean',
            description: 'Is this amenity included or ' +
                'not included in the room?',
        }
    ]
};

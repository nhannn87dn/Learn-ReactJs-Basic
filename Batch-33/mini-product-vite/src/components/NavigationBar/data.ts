export const navsList = [
    {id: 1, label: 'Home', url: '/'},
    {id: 2, label: 'Category', url: '/category'},
    {id: 3, label: 'Blog', url: '/blog', childs: [
        {id: 1, label: 'Tech', url: '/tech'},
        {id: 2, label: 'Sport', url: '/sport'},
        {id: 3, label: 'Fashion', url: '/fashion'},
    ]},
    {id: 4, label: 'Product', url: '/product'},
    {id: 5, label: 'Login', url: '/login'}
]
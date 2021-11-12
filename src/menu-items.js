const menuItems = {
    items: [
        {
            id: 'navigation',
            title: 'Home',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/app/dashboard/default',
                    icon: 'feather icon-home'
                }
            ]
        },

        {
            id: 'registro_usuarios',
            title: 'Clientes',
            type: 'group',
            icon: 'icon-group',
            children: [
                {
                    id: 'forms',
                    title: 'Registrar Clientes',
                    type: 'item',
                    url: '/forms/registro-cliente',
                    icon: 'feather icon-home'
                },
                {
                    id: 'bootstrap',
                    title: 'Listar CLientes',
                    type: 'item',
                    url: '/tables/listar-clientes',
                    icon: 'feather icon-server'
                },
                {
                    id: 'bootstrap',
                    title: 'Registrar Mascotas',
                    type: 'item',
                    url: '/tables/registrar-mascota',
                    icon: 'feather icon-home'
                },
                {
                    id: 'bootstrap',
                    title: 'Listar Mascotas',
                    type: 'item',
                    url: '/tables/listar-mascota',
                    icon: 'feather icon-home'
                }

            ]
        },

        {
            id: 'listar_usuarios',
            title: 'Paseadores',
            type: 'group',
            icon: 'icon-group',
            children: [
                {
                    id: 'forms',
                    title: 'Registrar Paseadores',
                    type: 'item',
                    url: '/forms/egistrar-paseadores',
                    icon: 'feather icon-file-text'
                },
                {
                    id: 'bootstrap',
                    title: 'Listar Paseadores',
                    type: 'item',
                    url: '/tables/listar-paseadores',
                    icon: 'feather icon-server'
                }

            ]
        },

    ]
};

export default menuItems;

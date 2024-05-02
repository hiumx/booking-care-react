export const adminMenu = [
    { //người dùng
        name: 'menu.admin.user',
        menus: [
            {
                name: 'menu.admin.manage-admin',
                link: '/system/manage-admin'
                // subMenus: [
                //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
                // ]
            },
            {
                name: 'menu.admin.manage-doctor',
                link: '/system/manage-doctor'
            },
            {
                name: 'menu.admin.crud-user',
                link: '/system/crud-user'
            },
            {
                name: 'menu.admin.user-redux',
                link: '/system/user-redux'
            },
            {
                name: 'menu.admin.doctor-schedule',
                link: '/system/doctor-schedule'
            },
        ]
    },
    { //phòng khám
        name: 'menu.admin.clinic', menus: [
            {
                name: 'menu.admin.manage-clinic',
                link: '/system/manage-clinic'
                // subMenus: [
                //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
                // ]
            },

        ]
    },
    { //chuyên khoa
        name: 'menu.admin.specialty', menus: [
            {
                name: 'menu.admin.manage-specialty',
                link: '/system/manage-specialty'
                // subMenus: [
                //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
                // ]
            },

        ]
    },
    { //cẩm nang, bài đăng
        name: 'menu.admin.handbook', menus: [
            {
                name: 'menu.admin.manage-handbook',
                link: '/system/manage-handbook'
                // subMenus: [
                //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
                // ]
            },

        ]
    },
];

export const doctorMenu = [
    {
        name: 'menu.doctor.doctor-schedule',
        menus: [
            {
                name: 'menu.doctor.manage-schedule', 
                link: '/system/doctor-schedule',
            },
            {
                name: 'menu.doctor.manage-appointment', 
                link: '/system/appointment-management'
            },
        ]
    },
]
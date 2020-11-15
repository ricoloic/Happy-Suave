var Sequelize = require('sequelize');

var Conn = new Sequelize(process.env.DB_NAME, process.env.DB_USER_NAME, process.env.DB_USER_PASSWORD, { host: process.env.DB_HOST, dialect: 'mysql' });

var Users = Conn.define('users', {
    id: {
      autoIncrement: true,
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    last_name: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        defaultValue: "",
        unique: "index_users_on_email"
    },
    title: {
      type: Sequelize.STRING(255),
      allowNull: true
    }
}, { timestamps: false, underscored: true });

var Batteries = Conn.define('batteries', {
    id: {
      autoIncrement: true,
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    building_id: {
      type: Sequelize.BIGINT,
      allowNull: true
    },
    employee_id: {
      type: Sequelize.BIGINT,
      allowNull: true
    },
    battery_type: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    battery_status: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    date_of_commissioning: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    date_of_last_inspection: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    certificate_of_operations: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    information: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    notes: {
      type: Sequelize.STRING(255),
      allowNull: true
    }
}, { timestamps: false, underscored: true });

var Elevators = Conn.define('elevators', {
    id: {
      autoIncrement: true,
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    column_id: {
      type: Sequelize.BIGINT,
      allowNull: true
    },
    serial_number: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    elevator_model: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    elevator_status: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    date_of_last_inspection: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    information: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    notes: {
      type: Sequelize.STRING(255),
      allowNull: true
    }
}, { timestamps: false, underscored: true });

var Leads = Conn.define('leads', {
    id: {
      autoIncrement: true,
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    full_name: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    email: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    phone: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    business_name: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    project_name: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    department: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    user_id: {
      type: Sequelize.BIGINT,
      allowNull: true
    }
}, { timestamps: false, underscored: true });

var Columns = Conn.define('columns', {
    id: {
      autoIncrement: true,
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    battery_id: {
      type: Sequelize.BIGINT,
      allowNull: true
    },
    column_type: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    column_status: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    number_of_floors_served: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    information: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    notes: {
      type: Sequelize.STRING(255),
      allowNull: true
    }
}, { timestamps: false, underscored: true });

var Quotes = Conn.define('quotes', {
    id: {
      autoIncrement: true,
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: Sequelize.BIGINT,
      allowNull: true
    },
    floors: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    basements: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    parking_spaces: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    occupants: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    product_line: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    total_price: {
      type: Sequelize.DECIMAL(8,2),
      allowNull: true
    },
    elevator_number: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    building_type: {
      type: Sequelize.STRING(255),
      allowNull: true
    }
}, { timestamps: false, underscored: true });

var BuildingDetails = Conn.define('building_details', {
    id: {
      autoIncrement: true,
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    building_id: {
      type: Sequelize.BIGINT,
      allowNull: true,
      references: {
        model: 'buildings',
        key: 'id'
      }
    },
    information_key: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    value: {
      type: Sequelize.STRING(255),
      allowNull: true
    }
}, { timestamps: false, underscored: true });

var Buildings = Conn.define('buildings', {
    id: {
      autoIncrement: true,
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    customer_id: {
      type: Sequelize.BIGINT,
      allowNull: true
    },
    building_detail_id: {
      type: Sequelize.BIGINT,
      allowNull: true
    },
    address_id: {
      type: Sequelize.BIGINT,
      allowNull: true
    },
    administrator_full_name: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    administrator_email: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    administrator_phone_number: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    technical_contact_full_name: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    technical_contact_email: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    technical_contact_phone: {
      type: Sequelize.STRING(255),
      allowNull: true
    }
}, { timestamps: false, underscored: true });

var Employees = Conn.define('employees', {
    id: {
      autoIncrement: true,
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    last_name: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    function: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    phone: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    email: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    user_id: {
      type: Sequelize.BIGINT,
      allowNull: true
    }
}, { timestamps: false, underscored: true });

var Customers = Conn.define('customers', {
    id: {
      autoIncrement: true,
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: Sequelize.BIGINT,
      allowNull: true
    },
    company_name: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    company_contact_full_name: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    company_contact_phone: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    company_contact_email: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    technical_authority_full_name: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    technical_authority_phone_number: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    technical_manager_email_service: {
      type: Sequelize.STRING(255),
      allowNull: true
    }
}, { timestamps: false, underscored: true });

var Addresses = Conn.define('addresses', {
    id: {
      autoIncrement: true,
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    building_id: {
      type: Sequelize.BIGINT,
      allowNull: true,
      references: {
        model: 'buildings',
        key: 'id'
      }
    },
    customer_id: {
      type: Sequelize.BIGINT,
      allowNull: true,
      references: {
        model: 'customers',
        key: 'id'
      }
    },
    type_of_address: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    status: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    entity: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    number_and_street: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    city: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    postal_code: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    country: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    notes: {
      type: Sequelize.STRING(255),
      allowNull: true
    }
}, { timestamps: false, underscored: true });

module.exports = {
    Users,
    BuildingDetails,
    Buildings,
    Employees,
    Customers,
    Addresses,
    Batteries,
    Elevators,
    Leads,
    Columns,
    Quotes
};
# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 11, 2024 14:55:16
# Database: sqlite:////tmp/tmp.ZYpvEv9CYU/otto4/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Customer(SAFRSBaseX, Base):
    """
    description: Table for storing customer details
    """
    __tablename__ = 'customers'
    _s_collection_name = 'Customer'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    first_name = Column(String(50), nullable=False)
    last_name = Column(String(50), nullable=False)
    email = Column(String(100), nullable=False, unique=True)

    # parent relationships (access parent)

    # child relationships (access children)
    SaleList : Mapped[List["Sale"]] = relationship(back_populates="customer")
    ServiceAppointmentList : Mapped[List["ServiceAppointment"]] = relationship(back_populates="customer")



class Salesperson(SAFRSBaseX, Base):
    """
    description: Table for storing salesperson details
    """
    __tablename__ = 'salespersons'
    _s_collection_name = 'Salesperson'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    first_name = Column(String(50), nullable=False)
    last_name = Column(String(50), nullable=False)
    hire_date = Column(DateTime)

    # parent relationships (access parent)

    # child relationships (access children)
    SaleList : Mapped[List["Sale"]] = relationship(back_populates="salesperson")



class ServiceTechnician(SAFRSBaseX, Base):
    """
    description: Table for storing service technician details
    """
    __tablename__ = 'service_technicians'
    _s_collection_name = 'ServiceTechnician'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    first_name = Column(String(50), nullable=False)
    last_name = Column(String(50), nullable=False)
    hire_date = Column(DateTime)

    # parent relationships (access parent)

    # child relationships (access children)
    ServiceList : Mapped[List["Service"]] = relationship(back_populates="technician")



class Supplier(SAFRSBaseX, Base):
    """
    description: Table for storing vehicle supplier details
    """
    __tablename__ = 'suppliers'
    _s_collection_name = 'Supplier'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    contact_email = Column(String(100))

    # parent relationships (access parent)

    # child relationships (access children)
    InventoryList : Mapped[List["Inventory"]] = relationship(back_populates="supplier")



class Vehicle(SAFRSBaseX, Base):
    """
    description: Table for storing vehicle details
    """
    __tablename__ = 'vehicles'
    _s_collection_name = 'Vehicle'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    make = Column(String(50), nullable=False)
    model = Column(String(50), nullable=False)
    year = Column(Integer, nullable=False)
    price = Column(Float, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    InsuranceList : Mapped[List["Insurance"]] = relationship(back_populates="vehicle")
    InventoryList : Mapped[List["Inventory"]] = relationship(back_populates="vehicle")
    SaleList : Mapped[List["Sale"]] = relationship(back_populates="vehicle")
    ServiceAppointmentList : Mapped[List["ServiceAppointment"]] = relationship(back_populates="vehicle")
    WarrantyList : Mapped[List["Warranty"]] = relationship(back_populates="vehicle")



class Insurance(SAFRSBaseX, Base):
    """
    description: Table for recording vehicle insurance details
    """
    __tablename__ = 'insurance'
    _s_collection_name = 'Insurance'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    vehicle_id = Column(ForeignKey('vehicles.id'), nullable=False)
    provider_name = Column(String(100), nullable=False)
    insurance_start_date = Column(DateTime, nullable=False)
    insurance_end_date = Column(DateTime, nullable=False)

    # parent relationships (access parent)
    vehicle : Mapped["Vehicle"] = relationship(back_populates=("InsuranceList"))

    # child relationships (access children)



class Inventory(SAFRSBaseX, Base):
    """
    description: Table for recording vehicle inventory
    """
    __tablename__ = 'inventory'
    _s_collection_name = 'Inventory'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    vehicle_id = Column(ForeignKey('vehicles.id'), nullable=False)
    quantity = Column(Integer, nullable=False)
    supplier_id = Column(ForeignKey('suppliers.id'), nullable=False)

    # parent relationships (access parent)
    supplier : Mapped["Supplier"] = relationship(back_populates=("InventoryList"))
    vehicle : Mapped["Vehicle"] = relationship(back_populates=("InventoryList"))

    # child relationships (access children)



class Sale(SAFRSBaseX, Base):
    """
    description: Table for recording vehicle sales
    """
    __tablename__ = 'sales'
    _s_collection_name = 'Sale'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    customer_id = Column(ForeignKey('customers.id'), nullable=False)
    vehicle_id = Column(ForeignKey('vehicles.id'), nullable=False)
    salesperson_id = Column(ForeignKey('salespersons.id'), nullable=False)
    sale_date = Column(DateTime)
    sale_price = Column(Float, nullable=False)

    # parent relationships (access parent)
    customer : Mapped["Customer"] = relationship(back_populates=("SaleList"))
    salesperson : Mapped["Salesperson"] = relationship(back_populates=("SaleList"))
    vehicle : Mapped["Vehicle"] = relationship(back_populates=("SaleList"))

    # child relationships (access children)
    PaymentList : Mapped[List["Payment"]] = relationship(back_populates="sale")



class ServiceAppointment(SAFRSBaseX, Base):
    """
    description: Table for recording service appointments
    """
    __tablename__ = 'service_appointments'
    _s_collection_name = 'ServiceAppointment'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    customer_id = Column(ForeignKey('customers.id'), nullable=False)
    vehicle_id = Column(ForeignKey('vehicles.id'), nullable=False)
    appointment_date = Column(DateTime, nullable=False)
    service_notes = Column(String(200))

    # parent relationships (access parent)
    customer : Mapped["Customer"] = relationship(back_populates=("ServiceAppointmentList"))
    vehicle : Mapped["Vehicle"] = relationship(back_populates=("ServiceAppointmentList"))

    # child relationships (access children)
    ServiceList : Mapped[List["Service"]] = relationship(back_populates="service_appointment")



class Warranty(SAFRSBaseX, Base):
    """
    description: Table for recording vehicle warranties
    """
    __tablename__ = 'warranties'
    _s_collection_name = 'Warranty'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    vehicle_id = Column(ForeignKey('vehicles.id'), nullable=False)
    warranty_start_date = Column(DateTime, nullable=False)
    warranty_end_date = Column(DateTime, nullable=False)

    # parent relationships (access parent)
    vehicle : Mapped["Vehicle"] = relationship(back_populates=("WarrantyList"))

    # child relationships (access children)



class Payment(SAFRSBaseX, Base):
    """
    description: Table for recording payment transactions
    """
    __tablename__ = 'payments'
    _s_collection_name = 'Payment'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    sale_id = Column(ForeignKey('sales.id'), nullable=False)
    payment_date = Column(DateTime)
    amount = Column(Float, nullable=False)

    # parent relationships (access parent)
    sale : Mapped["Sale"] = relationship(back_populates=("PaymentList"))

    # child relationships (access children)



class Service(SAFRSBaseX, Base):
    """
    description: Table for recording services performed
    """
    __tablename__ = 'services'
    _s_collection_name = 'Service'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    service_appointment_id = Column(ForeignKey('service_appointments.id'), nullable=False)
    technician_id = Column(ForeignKey('service_technicians.id'), nullable=False)
    service_date = Column(DateTime)
    service_cost = Column(Float, nullable=False)

    # parent relationships (access parent)
    service_appointment : Mapped["ServiceAppointment"] = relationship(back_populates=("ServiceList"))
    technician : Mapped["ServiceTechnician"] = relationship(back_populates=("ServiceList"))

    # child relationships (access children)

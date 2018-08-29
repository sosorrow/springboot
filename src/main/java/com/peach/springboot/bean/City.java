package com.peach.springboot.bean;

public class City {
    private int ID;
    private String name;
    private String code;
    private String district;
    private double population;

    public City() {}

    public City(int ID, String name, String code, String district, double population) {
        this.ID = ID;
        this.name = name;
        this.code = code;
        this.district = district;
        this.population = population;
    }

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public double getPopulation() {
        return population;
    }

    public void setPopulation(double population) {
        this.population = population;
    }
}

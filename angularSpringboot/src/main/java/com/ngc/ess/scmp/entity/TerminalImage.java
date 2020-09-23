package com.ngc.ess.scmp.entity;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class TerminalImage {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long imageId;
    private  String imageName;
    private  String imageXml;
    private Date createDate;
    public long getImageId() {
        return imageId;
    }

    public String getImageName() {
        return imageName;
    }

    public String getImageXml() {
        return imageXml;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setImageId(long imageId) {
        this.imageId = imageId;
    }

    public void setImageName(String imageName) {
        this.imageName = imageName;
    }

    public void setImageXml(String imageXml) {
        this.imageXml = imageXml;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

}
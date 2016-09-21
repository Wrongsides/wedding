package co.uk.wrongsides.domain;

import java.util.Date;

public class SaveTheDate {

    private String weddingId;
    private Date date;

    public SaveTheDate(String weddingId) {
        this.weddingId = weddingId;
    }

    public SaveTheDate withDate(Date date){
        this.date = date;
        return this;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}

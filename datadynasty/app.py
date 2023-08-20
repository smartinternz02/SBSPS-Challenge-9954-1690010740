from flask import Flask,render_template,url_for,flash,redirect
from contactform import ContactForm
import csv

from contactform import ContactForm
import csv
app=Flask(__name__)
app.config["SECRET_KEY"]="kQcfiRYMh@omt"
@app.route('/')
@app.route('/index')
def  index():
    return render_template("index.html")

@app.route('/about page')
def about():
    return render_template("about page.html")

@app.route('/contact',methods=["GET","POST"])
def contact():
    form = ContactForm()
    if form.validate_on_submit():
        with open("form_data.csv","a") as file:
            writer=csv.writer(file)
            writer.writerow([form.data["name"],form.data["email"],form.data["message"]])
        flash("Message sent successfully")

        return redirect(url_for("contact"))
    return render_template("contact.html",form=form)
@app.route('/dashboard')
def dashboard():
    return render_template("dashboard.html")
@app.route('/story')
def story():
    return render_template("story.html")



if __name__=='__main__':
    app.run(debug=True)
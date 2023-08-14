from flask import Flask,render_template
app=Flask(__name__)
@app.route('/')
@app.route('/index')
def  index():
    return render_template("index.html")

@app.route('/about page')
def about():
    return render_template("about page.html")

@app.route('/contact')
def contact():
    return render_template("contact.html")
@app.route('/dashboard')
def dashboard():
    return render_template("dashboard.html")
@app.route('/story')
def story():
    return render_template("story.html")



if __name__=='__main__':
    app.run(debug=True)
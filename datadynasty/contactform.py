from flask_wtf import FlaskForm
from wtforms import StringField,EmailField,TextAreaField,SubmitField
from wtforms.validators import DataRequired,Length,Email


class ContactForm(FlaskForm):
    name=StringField("Name",validators=[DataRequired(),Length(min=3,max=30)])
    email=EmailField("Email",validators=[DataRequired(),Email()])
    message=TextAreaField("Message",validators=[DataRequired(),Length(min=3,max=1000)])
    submit=SubmitField("Submit")
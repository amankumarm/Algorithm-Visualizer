from flask import Flask,render_template,url_for,redirect
app=Flask(__name__)
@app.route('/v')
def root():
   return render_template("index.html")
@app.route('/graph')
def graph():
   return render_template("graph.html")
@app.route('/')
def main():
   return redirect('/v#/Simulations')
@app.errorhandler(404)
def redirect_404(e):
   return redirect('/v#/Simulations')

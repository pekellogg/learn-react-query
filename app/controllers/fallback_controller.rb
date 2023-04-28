# inherit from ActionController::Base for ability to render an HTML file for React
class FallbackController < ActionController::Base
  def index
    render file: "public/index.html"
  end
end
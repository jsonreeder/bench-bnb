class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :ensure_signed_in

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def log_in!(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def log_out!
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  # TODO: Make sure this is still the pattern with front end auth
  def ensure_signed_in
    redirce_to new_session_url unless_current_user
  end
end

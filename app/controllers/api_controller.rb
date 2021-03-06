class ApiController < ApplicationController

    def require_login
      authenticate_token || render_unauthorized("Access denied")
    end

    def current_coach
      @current_coach ||= authenticate_token
    end

    def current_admin
      @current_admin ||= authenticate_token
    end

    protected

    def render_unauthorized(message)
      errors = { errors: [ detail: message ] }
      render json: errors, status: :unauthorized
    end

    private

    def authenticate_token
      authenticate_with_http_token do | token, options |
      Coach.find_by(auth_token: token)
      end
    end

  end
# find_by_auth_token!(request.headers[:token])

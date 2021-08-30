class ReviewsController < ApplicationController
  before_action :authorize_request, only: [:create, :index]

  # GET /review
  def index
    @reviews = Review.all

    render json: @reviews
  end

 

  # POST /review
  def create
    @song = Song.find(params[:song_id])
    @review = Review.where(song_id: @song.id).new(review_params)
    @review.user = @current_user
    
    if @review.save
      render json: @review, status: :created
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end


  # # DELETE /users/1

  private
    # Use callbacks to share common setup or constraints between actions.

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:review).permit(:user_id, :song_id, :title, :description)
    end
end

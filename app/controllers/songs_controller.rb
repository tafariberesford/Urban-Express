class SongsController < ApplicationController
before_action :set_song, only: [:show, :update, :destroy ]
before_action :authorize_request, only: [:show, :index, :create, :update, :destroy]


  # GET /songs
  def index

    @songs = Song.all

    render json: @songs
  end

  # # GET /songs/1
  def show
    render json: @songs, include: {reviews:{include: :user}}
  end

  # POST /songs
  def create
    @songs = Song.new(song_params)
    @song.user = @current_user
    
    if @song.save
      render json: @song, status: :created
        
    else
      render json: @song.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /songs/1
  def update
    if @song.update(song_params)
      render json: @song
    else
      render json: @song.errors, status: :unprocessable_entity
    end
  end


  # # DELETE /songs/1
  def destroy
    @song.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_song
      @song = Song.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:song).permit(:title, :artist, :image_url, :user_id)
    end
end

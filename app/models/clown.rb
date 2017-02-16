# == Schema Information
#
# Table name: clowns
#
#  id         :integer          not null, primary key
#  name       :string
#  nose_color :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  car_id     :integer
#

class Clown < ApplicationRecord

  validates :name, {length: {in: 8..16}}
  after_save(:evil_laughter)

  belongs_to :car
    # create a method on clown called car
  belongs_to :circus

  def evil_laughter
    puts "Ha ha Ha"
  end

  def honk
    # if (nose_color != 'red')
    #   puts "touch"
    # else
    #   puts "honk"
    # end
    red_nose? ? "HONK" : "Ouch!"
  end

  def red_nose?
    nose_color == 'red'
  end

end

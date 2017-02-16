# == Schema Information
#
# Table name: cars
#
#  id         :integer          not null, primary key
#  make       :string
#  model      :string
#  color      :string
#  year       :string
#  capacity   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Car < ApplicationRecord

  # validate make and model can't be blank
  validates :make, :model, presence: true

  # define a vroom method that returns "vroom vroom"
  def vroom
    if jalopy?
      "putter"
    else
      "vroom vroom"
    end
    # jalopy? ? "putter" : "vroom vroom"
  end

  # define a jalopy? method that returns true if more than 8 years
  def jalopy?
    # current_year = Date.today.year / Time.now.year
    year.to_i < Time.now.year - 8
    # if (year <= '2009')
    #   puts true
    # else
    #   puts false
    # end
  end

end

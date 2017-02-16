class CreateCars < ActiveRecord::Migration[5.0]
  def change
    create_table :cars do |t|
      # |t| = table that we're constructing
      t.string :make
      t.string :model
      t.string :color
      t.string :year # changed from integer to string
      t.integer :capacity # changed from number to integer
      # then run 'rails db:migrate / bundle install / bundle exec annotate'

      t.timestamps
    end
  end
end

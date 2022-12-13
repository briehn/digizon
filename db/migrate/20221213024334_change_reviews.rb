class ChangeReviews < ActiveRecord::Migration[7.0]
  def change
    change_column_null :reviews, :headline, false
  end
end

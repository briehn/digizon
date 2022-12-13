class AddHeadlineToReviews < ActiveRecord::Migration[7.0]
  def change
    add_column :reviews, :headline, :string
  end
end

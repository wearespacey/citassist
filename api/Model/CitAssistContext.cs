using Microsoft.EntityFrameworkCore;

namespace api.Model
{
    public class CitAssistContext : DbContext
    {
        public CitAssistContext() : base() {}

        protected override void OnModelCreating(ModelBuilder modelBuidler)
        {
            modelBuidler.Entity<AccessPoint>(e => {
                e.HasKey(ap => ap.Id);

                e.Property(ap => ap.Id)
                 .HasColumnName("ID")
                 .ValueGeneratedOnAdd();

                e.Property(ap => ap.Name);

                e.Property(ap => ap.Arrival)
                 .HasColumnType("Date");
            });
        }
    }
}
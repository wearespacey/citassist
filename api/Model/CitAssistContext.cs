using Microsoft.EntityFrameworkCore;

namespace api.Model
{
    public class CitAssistContext : DbContext
    {
        public DbSet<AccessPoint> AccessPoints { get; set; }
        public DbSet<Account> Accounts { get; set; }
        public CitAssistContext(DbContextOptions<CitAssistContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuidler)
        {
            modelBuidler.Entity<AccessPoint>(e =>
            {
                e.HasKey(ap => ap.Id);

                e.Property(ap => ap.Id)
                 .HasColumnName("ID")
                 .ValueGeneratedOnAdd();

                e.Property(ap => ap.Name);

                e.Property(ap => ap.Arrival)
                 .HasColumnType("Date");
            });

            modelBuidler.Entity<Account>(e =>
            {
                e.HasKey(ap => ap.Id);

                e.Property(ap => ap.Id)
                 .HasColumnName("ID")
                 .ValueGeneratedOnAdd();

                e.Property(ap => ap.Login);

                e.Property(ap => ap.Password);
            });
        }
    }
}
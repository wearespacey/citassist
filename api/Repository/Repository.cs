using System;
using System.Linq;
using System.Linq.Expressions;
using api.Model;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public abstract class Repository<T> : IRepository<T> where T : class
    {
        protected CitAssistContext CitAssistContext { get; set; }

        public Repository(CitAssistContext CitAssistContext)
        {
            this.CitAssistContext = CitAssistContext;
        }

        public IQueryable<T> FindAll()
        {
            return this.CitAssistContext.Set<T>().AsNoTracking();
        }

        public IQueryable<T> FindByCondition(Expression<Func<T, bool>> expression)
        {
            return this.CitAssistContext.Set<T>().Where(expression).AsNoTracking();
        }

        public void Create(T entity)
        {
            this.CitAssistContext.Set<T>().Add(entity);
        }

        public void Update(T entity)
        {
            this.CitAssistContext.Set<T>().Update(entity);
        }

        public void Delete(T entity)
        {
            this.CitAssistContext.Set<T>().Remove(entity);
        }

        IQueryable<T> IRepository<T>.FindAll()
        {
            throw new NotImplementedException();
        }
    }
}